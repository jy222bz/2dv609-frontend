import { Action, Selector, State, StateContext } from '@ngxs/store';
import { HideLoaderAction, ShowLoaderAction } from './loader.actions';
import { Injectable } from '@angular/core';

export class LoaderStateModel {
  public status: boolean;
}

@State<LoaderStateModel>({
  name: 'loader',
  defaults: {
    status: false
  }
})
@Injectable()
export class LoaderState {
  @Selector()
  public static status(state: LoaderStateModel) {
    return state.status;
  }

  @Action(ShowLoaderAction)
  public showLoaderAction(ctx: StateContext<LoaderStateModel>) {
    const state = ctx.getState();
    if (state.status) {
      return;
    }
    ctx.setState({ status: true });
  }

  @Action(HideLoaderAction)
  public hideLoaderAction(ctx: StateContext<LoaderStateModel>) {
    const state = ctx.getState();
    if (!state.status) {
      return;
    }
    ctx.setState({ status: false });
  }
}
