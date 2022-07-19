import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SerarchComponent } from './search.component';

describe('SerarchComponent', () => {
  let component: SerarchComponent;
  let fixture: ComponentFixture<SerarchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SerarchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SerarchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
