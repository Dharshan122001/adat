import React, { useRef, useEffect, useLayoutEffect } from "react";
import { ControlProps, or, rankWith, scopeEndsWith } from "@jsonforms/core";
import { withJsonFormsControlProps } from "@jsonforms/react";
import merge from "lodash/merge";

const MIN_ROWS = 3;
const LINE_HEIGHT = 21; // Approximate line height in pixels

const AutoResizeTextAreaControl = (props: ControlProps) => {
  const { data, handleChange, enabled, uischema, path, id, config } = props;

  const appliedUiSchemaOptions = merge({}, config, uischema.options);

  // Use actual data as value
  const value = data ?? "";

  const textareaRef = useRef<HTMLTextAreaElement>(null);

  // Calculate minimum height based on rows
  const minHeight = MIN_ROWS * LINE_HEIGHT;

  // Function to calculate and apply the correct height
  const adjustHeight = () => {
    const textarea = textareaRef.current;
    if (!textarea) return;

    // Reset height to auto to get the correct scrollHeight
    textarea.style.height = "auto";
    
    // Get the scrollHeight (content height)
    const scrollHeight = textarea.scrollHeight;
    
    // Set height to the maximum of content height or minimum height
    const newHeight = Math.max(scrollHeight, minHeight);
    textarea.style.height = `${newHeight}px`;
  };

  // Adjust height on initial mount and value changes using useLayoutEffect
  useLayoutEffect(() => {
    adjustHeight();
  }, [value]);

  // Also adjust when the component first renders
  useEffect(() => {
    // Small delay to ensure DOM is fully rendered
    const timer = setTimeout(adjustHeight, 0);
    return () => clearTimeout(timer);
  }, []);

  const handleChangeText = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newValue = event.target.value;
    handleChange(path, newValue === "" ? undefined : newValue);
    adjustHeight();
  };

  return (
    <textarea
      ref={textareaRef}
      id={`${id}-textarea`}
      value={value}
      onChange={handleChangeText}
      placeholder={appliedUiSchemaOptions?.placeholder || ""}
      disabled={!enabled || appliedUiSchemaOptions.readOnly}
      style={{
        width: "100%",
        fontSize: "14px",
        lineHeight: "1.6",
        padding: "10px",
        borderRadius: "4px",
        border: "1px solid #ccc",
        resize: "vertical",
        overflow: "hidden",
        minHeight: `${minHeight}px`,
        height: "auto",
        whiteSpace: "pre-wrap",
        wordBreak: "break-word",
        boxSizing: "border-box",
      }}
    />
  );
};

export const autoResizeTextAreaTester = rankWith(
  2,
  or(
    scopeEndsWith("/properties/particulars"),
    scopeEndsWith("/properties/guidance"),
    scopeEndsWith("/properties/response"),
    scopeEndsWith("/properties/details")
  )
);

export default withJsonFormsControlProps(AutoResizeTextAreaControl);