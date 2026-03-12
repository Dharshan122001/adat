import { materialRenderers } from "@jsonforms/material-renderers";
import "./App.css";
import { CustomGroup } from "./components/CustomGroup.tsx";
import AccordionGroupRenderer, {
  AccordionGroupTester,
} from "./Renderer/AccordionGroupRenderer";
const renderers = [
  ...materialRenderers,
  //register custom renderers
  { tester: AccordionGroupTester, renderer: AccordionGroupRenderer },
];
const App = () => {
  return (
    <>
      <CustomGroup />
    </>
  );
};

export default App;
