import { UIComponent } from "./UIComponent.model";
import { CompositeComponent } from "./CompositeComponent.model";

export class DialogComponent extends CompositeComponent {
    yesButton: UIComponent;
    noButton: UIComponent;
}