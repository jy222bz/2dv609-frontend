import {FormGroup} from '@angular/forms';


export abstract class DialogComponent {
  form: FormGroup;
  working = false;
  error = null;
  dialogRef = null;

  protected constructor(
      dialog,
  ) {
    this.dialogRef = dialog;
  }


  save() {
    if (this.form && !this.form.valid) {
      Object.keys(this.form.controls).forEach(field => {
        const control = this.form.get(field);
        control.markAsTouched({onlySelf: true});
      });
      return false;
    }
    this.working = true;
    this.error = null;
    this.submit();
    return false;
  }

  close() {
    this.dialogRef.close();
  }

  abstract submit();
}
