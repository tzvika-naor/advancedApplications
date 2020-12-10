import { Directive, HostBinding, HostListener, Input, OnInit } from '@angular/core';

@Directive({
    selector: '[appDropdown]'
})

export class DropdownDirective implements OnInit {
    @Input() opentoggler = false;
    @Input() closetoggler = true;
    @HostBinding('class.show') isOpen = false;
    ngOnInit(): void {
        this.isOpen = false;
    }

    @HostListener('mouseenter') mouseover(event: Event) {
        this.isOpen = this.opentoggler;
    }
    @HostListener('mouseleave') mouseleave(event: Event) {
        this.isOpen = this.closetoggler;
    }
}
