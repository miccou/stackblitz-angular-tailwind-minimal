import { CommonModule } from "@angular/common";
import {
  Component,
  ElementRef,
  HostListener,
  ViewChild,
  viewChild,
} from "@angular/core";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "app.component.html",
})
export class AppComponent {
  @ViewChild("confirmationPanel") confirmationPanel!: ElementRef;
  @ViewChild("keySummaryPanel") keySummaryPanel!: ElementRef;

  title = "angular-tailwind-minimal";

  shouldFixConfirmationPanel = false;

  @HostListener("scroll", ["$event"])
  onElementScroll($event: Event) {
    const confirmationPanelElement = this.confirmationPanel
      .nativeElement as HTMLDivElement;
    const keySummaryElement = this.keySummaryPanel
      .nativeElement as HTMLDivElement;

    console.log(
      "top of confirmation panel",
      keySummaryElement.getBoundingClientRect().top
    );
    if (keySummaryElement.getBoundingClientRect().top - 50 - 32 < 0) {
      console.log("should fix confirmation panel");

      this.shouldFixConfirmationPanel = true;
    } else {
      console.log("should unfix confirmation panel");

      this.shouldFixConfirmationPanel = false;
    }
  }
}
