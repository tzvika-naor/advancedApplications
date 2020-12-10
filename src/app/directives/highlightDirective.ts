import { Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
    selector: '[appHighlight]'
})
export class HighlightDirective implements OnInit {
    @Input() defaultColor = 'black';
    @Input() highlightColor = 'white';
    @HostBinding('style.color') color: string;

    constructor(private elRef: ElementRef, private renderer: Renderer2) { }

    ngOnInit() {
        this.color = this.defaultColor;
    }

    @HostListener('mouseenter') mouseover(eventData: Event) {
        this.color = this.highlightColor;
    }

    @HostListener('mouseleave') mouseleave(eventData: Event) {
        this.color = this.defaultColor;
    }

}