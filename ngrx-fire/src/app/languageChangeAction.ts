import { createAction, props } from '@ngrx/store'

export const languageChangeAction = createAction( '[action category] languageChange', props<{ language: string}>() );
