import { Directive, ElementRef, Injector, SimpleChanges, EventEmitter, Input, Output } from '@angular/core';
import { UpgradeComponent } from '@angular/upgrade/static';

@Directive({
  selector: 'hero-detail'
})
export class HeroDetailDirective extends UpgradeComponent {
  @Input() hero: String;
  @Output() deleted: EventEmitter<String>;

  constructor(elementRef: ElementRef, injector: Injector) {
    super('heroDetail', elementRef, injector);
  }
}
