import { Directive, Input, OnInit, TemplateRef, ViewContainerRef } from "@angular/core";

@Directive({
    selector: '[AppDirectiveIf]',
})
export class AlternatIfDiractive implements OnInit {
    @Input() appAlternatIf !: boolean;
    

    constructor(private templateref: TemplateRef<any>, private vcref: ViewContainerRef) { }
    ngOnInit(): void {
        if (this.appAlternatIf) {
            this.vcref.createEmbeddedView(this.templateref);
        }
        else {
            this.vcref.clear();
        }
    }

}
