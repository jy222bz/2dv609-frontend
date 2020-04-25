import { Action, Selector, State, StateContext } from '@ngxs/store';
import { ShowSidebarAction, HideSidebarAction, ToggleSidebarAction } from './sidebar.actions';
import { Injectable } from '@angular/core';

export class SidebarStateModel {
  public status: boolean;
}

@State<SidebarStateModel>({
  name: 'sidebar',
  defaults: {
    status: true
  }
})
@Injectable()
export class SidebarState {
  @Selector()
  public static status(state: SidebarStateModel) {
    return state.status;
  }

  @Action(ShowSidebarAction)
  public showLoaderAction(ctx: StateContext<SidebarStateModel>) {
    ctx.setState({ status: true });
  }

  @Action(HideSidebarAction)
  public hideLoaderAction(ctx: StateContext<SidebarStateModel>) {
    ctx.setState({ status: false });
  }

  @Action(ToggleSidebarAction)
  public toggleLoaderAction(ctx: StateContext<SidebarStateModel>) {
    const state = ctx.getState();
    ctx.setState({ status: !state.status });
  }
}
