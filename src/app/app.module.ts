import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { MessageEditorComponent } from './message-editor/message-editor.component';
import { MessagesViewerComponent } from './messages-viewer/messages-viewer.component';
import { MessageComponent } from './message/message.component';
import { MessageFromComponent } from './message-from/message-from.component';


@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    MessageEditorComponent,
    MessagesViewerComponent,
    MessageComponent,
    MessageFromComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
