import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss'],
})
export class AlertComponent implements OnInit {

  currentValue = '';

  @Input()
  set value(value: any) {
    this.currentValue = this.extract(value);
  }

  ngOnInit(): void {

  }

  extract(value) {
    if (value.status) {
      return this.render(value.error);
    } else {
      return this.render(value.message);
    }
  }

  render(data) {
    if (data === null) {
      return '';
    } else if (data instanceof Array) {
      return this.renderArray(data);
    } else if (data instanceof Object) {
      return this.renderObject(data);
    } else {
      return data;
    }
  }

  renderObject(data) {
    if (data.message !== undefined) {
      return data.message;
    }

    let errorsHtml = '<ul>';
    for (const key in data) {
      if (data.hasOwnProperty(key)) {
        errorsHtml += '<li>' + key + this.render(data[key]) + '</li>';
      }
    }
    errorsHtml += '</ul>';
    return errorsHtml;
  }

  renderArray(data) {
    let errorsHtml = '<ul>';
    for (const key in data) {
      if (data.hasOwnProperty(key)) {
        errorsHtml += '<li>' + data[key] + '</li>';
      }
    }
    return errorsHtml + '</ul>';
  }
}


