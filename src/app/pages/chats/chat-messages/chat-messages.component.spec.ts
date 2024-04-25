import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatMessagesComponent } from './chat-messages.component';

describe('ChatMessagesComponent', () => {
  let component: ChatMessagesComponent;
  let fixture: ComponentFixture<ChatMessagesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChatMessagesComponent]
    });
    fixture = TestBed.createComponent(ChatMessagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
