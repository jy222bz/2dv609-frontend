import { Component, ElementRef, HostBinding, HostListener, Input, OnDestroy, OnInit, Renderer2 } from '@angular/core';
import { ControlValueAccessor, NgControl } from '@angular/forms';
import { MatFormFieldControl } from '@angular/material/form-field';
import { FocusMonitor } from '@angular/cdk/a11y';
import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { Subject } from 'rxjs/internal/Subject';

export class FileInput {
  private _fileNames;

  constructor(private _files: File[], private delimiter: string = ', ') {
    this._fileNames = this._files.map((f: File) => f.name).join(delimiter);
  }

  get files() {
    return this._files || [];
  }

  get fileNames(): string {
    return this._fileNames;
  }
}


@Component({
  selector: 'app-input-file',
  templateUrl: './input-file.component.html',
  styleUrls: ['./input-file.component.scss'],
  providers: [
    { provide: MatFormFieldControl, useExisting: InputFileComponent }
  ]
})
export class InputFileComponent implements MatFormFieldControl<FileInput>, ControlValueAccessor, OnInit, OnDestroy {

  @Input() get value(): FileInput | null {
    return this.empty ? null : new FileInput(this._elementRef.nativeElement.value || []);
  }

  set value(fileInput: FileInput | null) {
    this.writeValue(fileInput.files);
    this.stateChanges.next();
  }

  @Input() get placeholder() {
    return this._placeholder;
  }

  set placeholder(plh) {
    this._placeholder = plh;
    this.stateChanges.next();
  }

  get empty() {
    return !this._elementRef.nativeElement.value || this._elementRef.nativeElement.value.length === 0;
  }

  @HostBinding('class.mat-form-field-should-float') get shouldPlaceholderFloat() {
    return this.focused || !this.empty || this.valuePlaceholder !== undefined;
  }

  @Input() get required() {
    return this._required;
  }

  set required(req: boolean) {
    this._required = coerceBooleanProperty(req);
    this.stateChanges.next();
  }

  @HostBinding('class.file-input-disabled') get isDisabled() {
    return this.disabled;
  }

  @Input() get disabled() {
    return this._elementRef.nativeElement.disabled;
  }

  set disabled(dis: boolean) {
    this.setDisabledState(coerceBooleanProperty(dis));
    this.stateChanges.next();
  }

  @Input() get errorState() {
    return this.ngControl.errors !== null && this.ngControl.touched;
  }


  /**
   * @see https://angular.io/api/forms/ControlValueAccessor
   */
  constructor(public ngControl: NgControl,
              private fm: FocusMonitor, private _elementRef: ElementRef, private _renderer: Renderer2) {

    ngControl.valueAccessor = this;
    fm.monitor(_elementRef.nativeElement, true).subscribe(origin => {
      this.focused = !!origin;
      this.stateChanges.next();
    });
  }

  get fileNames() {
    return this.value ? this.value.fileNames : this.valuePlaceholder;
  }
  static nextId = 0;
  shouldLabelFloat: boolean;
  autofilled?: boolean;

  stateChanges = new Subject<void>();
  focused = false;
  controlType = 'file-input';

  private _placeholder: string;
  private _required = false;

  @Input() valuePlaceholder: string;
  @Input() multiple: boolean;

  @HostBinding() id = `input-file-${InputFileComponent.nextId++}`;
  @HostBinding('attr.aria-describedby') describedBy = '';

  setDescribedByIds(ids: string[]) {
    this.describedBy = ids.join(' ');
  }

  onContainerClick(event: MouseEvent) {
    if ((event.target as Element).tagName.toLowerCase() !== 'input' && !this.disabled) {
      this._elementRef.nativeElement.querySelector('input').focus();
      this.focused = true;
      this.open();
    }
  }

  private _onChange = (_: any) => {
  }
  private _onTouched = () => {
  }

  writeValue(obj: any): void {
    this._renderer.setProperty(this._elementRef.nativeElement, 'value', obj);
  }

  registerOnChange(fn: (_: any) => void): void {
    this._onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this._onTouched = fn;
  }

  @HostListener('change', ['$event']) change(event) {
    const fileList = event.target.files;
    const fileArray = [];
    if (fileList) {
      for (const file of fileList) {
        fileArray.push(file);
      }
    }
    this.value = new FileInput(fileArray);
    this._onChange(this.value);
  }

  @HostListener('focusout') blur() {
    this.focused = false;
    this._onTouched();
  }

  setDisabledState?(isDisabled: boolean): void {
    this._renderer.setProperty(this._elementRef.nativeElement, 'disabled', isDisabled);
  }

  ngOnInit() {
    this.multiple = coerceBooleanProperty(this.multiple);
  }

  open() {
    if (!this.disabled) {
      this._elementRef.nativeElement.querySelector('input').click();
    }
  }

  ngOnDestroy() {
    this.stateChanges.complete();
    this.fm.stopMonitoring(this._elementRef.nativeElement);
  }
}
