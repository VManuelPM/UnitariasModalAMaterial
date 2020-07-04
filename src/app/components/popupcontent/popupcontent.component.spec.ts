import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupcontentComponent } from './popupcontent.component';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';

describe('PopupcontentComponent', () => {
  let component: PopupcontentComponent;
  let fixture: ComponentFixture<PopupcontentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopupcontentComponent],
      imports: [MatButtonModule, MatDialogModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopupcontentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
