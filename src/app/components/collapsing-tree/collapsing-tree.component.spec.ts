import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CollapsingTreeComponent } from './collapsing-tree.component';

describe('CollapsingTreeComponent', () => {
  let component: CollapsingTreeComponent;
  let fixture: ComponentFixture<CollapsingTreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CollapsingTreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CollapsingTreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
