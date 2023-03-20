import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  OnInit,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appDropdown]',
})
export class DropdownDirective implements OnInit {
  @HostBinding('class.open') isOpen = false;
  //   constructor(private elRef: ElementRef, private renderer: Renderer2) {}

  ngOnInit(): void {}

  //   @HostListener('click') openDropdown(eventData: Event) {
  //     // alert('Hello world!');
  //     this.elRef.nativeElement.parentElement.classList.contains('open') ? this.renderer.removeClass(this.elRef.nativeElement.parentElement, 'open') : this.renderer.addClass(this.elRef.nativeElement.parentElement, 'open');
  //   }

  @HostListener('click') onToggleOpen() {
    this.isOpen = !this.isOpen;
  }
}
