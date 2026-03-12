import { FC, useMemo, useState } from "react";
import { JsonForms } from "@jsonforms/react";
import {
  materialCells,
  materialRenderers,
} from "@jsonforms/material-renderers";
import AccordionGroupRenderer, {
  AccordionGroupTester,
} from "../Renderer/AccordionGroupRenderer";
import AutoResizeTextAreaControl, {
  autoResizeTextAreaTester,
} from "../Renderer/AutoResizeTextAreaControl.tsx";
import testSchema from "../Schemas/JsonSchema.json";
import testUischema from "../Schemas/JsonUiSchema.json";
import testData from "../Schemas/JsonData.ts";

const renderers = [
  ...materialRenderers,
  // register custom renderers
  { tester: autoResizeTextAreaTester, renderer: AutoResizeTextAreaControl },
  { tester: AccordionGroupTester, renderer: AccordionGroupRenderer },
];

export const CustomGroup: FC = () => {
  const [data, setData] = useState<object>(testData);

  return (
    <div>
      <JsonForms
        schema={testSchema}
        uischema={testUischema}
        data={data}
        renderers={renderers}
        cells={materialCells}
        onChange={({ data }) => setData(data)}
      />
    </div>
  );
};
