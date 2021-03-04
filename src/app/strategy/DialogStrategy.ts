import { ICreateComponentStrategy } from "./ICreateComponentStrategy";
import { StyleLibrary } from "../styleLibrary";
import { GraphEditorService } from "../services/graph-editor.service";

export class DialogStrategy extends ICreateComponentStrategy {
  constructor(geometry?) {
    super(geometry);
  }

  createDialog(graphEditorService: GraphEditorService, formComponent, parent: mxCell) {
      const style = StyleLibrary[0]["dialog"];
      const formVertexGeomety = new mxGeometry(this.basex, this.basey, 300, 300);

      let formCell = graphEditorService.insertVertex("", formVertexGeomety, parent, style);
      formCell["componentPart"] = "box";
      formCell["isPrimary"] = true;
      formCell["componentID"] = formComponent.id;
      formCell["type"] = formComponent.type;
      return formCell;
  }

  createComponent(graphEditorService: GraphEditorService, dialogComponent, parent: mxCell): mxCell {
      let dialogCell = this.createDialog(graphEditorService, dialogComponent, parent);
      let subComponentXOffset = 15;
      let subComponentYOffset = 40;
      let maxWidth = 200;
      for (let subUIComponent of dialogComponent["componentList"]) {
          console.log(subUIComponent);
          let vertex = graphEditorService.createComponent(subUIComponent, dialogCell);
          vertex["geometry"].x = subComponentXOffset;
          vertex["geometry"].y = subComponentYOffset;
          if (vertex["geometry"].width > maxWidth)
              maxWidth = vertex["geometry"].width;
          subComponentYOffset = subComponentYOffset + vertex["geometry"].height + 10;
      }

      let yesButton = dialogComponent['yesButton']
      let yesButtonVertex = graphEditorService.createComponent(yesButton, dialogCell)
      yesButtonVertex["geometry"].x = subComponentXOffset
      yesButtonVertex["geometry"].y = subComponentYOffset
      let noButton = dialogComponent['noButton']
      let noButtonVertex = graphEditorService.createComponent(noButton, dialogCell)
      noButtonVertex["geometry"].x = subComponentXOffset + yesButtonVertex["geometry"].width + 20
      noButtonVertex["geometry"].y = subComponentYOffset
      maxWidth = Math.max(maxWidth, yesButtonVertex["geometry"].width, noButtonVertex["geometry"].width)
      subComponentYOffset += yesButtonVertex["geometry"].height

      // resize parent vertex
      let newmxGeometry = new mxGeometry(this.basex, this.basey, maxWidth + 50, subComponentYOffset);
      dialogCell.setGeometry(newmxGeometry);
      dialogCell.setVisible(false)
      graphEditorService.editor.graph.refresh()

      dialogCell.setAllVisible = function(value) {
        dialogCell.setVisible(value)
        graphEditorService.editor.graph.refresh()
      }
      
      dialogCell.refresh = function() {
        graphEditorService.editor.graph.refresh()
      }

      return dialogCell;
  }
}
