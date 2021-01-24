import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatsSidebarComponent } from './chats-sidebar.component';

describe('ChatsSidebarComponent', () => {
  let component: ChatsSidebarComponent;
  let fixture: ComponentFixture<ChatsSidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatsSidebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatsSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
