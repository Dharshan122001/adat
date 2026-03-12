// import React, { useRef, useEffect, useLayoutEffect } from 'react';
// import { ControlProps, or, rankWith, scopeEndsWith } from '@jsonforms/core';
// import { withJsonFormsControlProps } from '@jsonforms/react';
// import merge from 'lodash/merge';

// const MIN_ROWS = 3;
// const LINE_HEIGHT = 21; // Approximate line height in pixels

// const AutoResizeTextAreaControl = (props: ControlProps) => {
//   const {
//     data,
//     handleChange,
//     enabled,
//     uischema,
//     path,
//     id,
//     config,
//   } = props;

//   const appliedUiSchemaOptions = merge({}, config, uischema.options);
//   const value = data === undefined || data === null ? '' : data;
//   const textareaRef = useRef<HTMLTextAreaElement>(null);

//   // Calculate minimum height based on rows
//   const minHeight = MIN_ROWS * LINE_HEIGHT;

//   // Function to calculate and apply the correct height
//   const adjustHeight = () => {
//     if (textareaRef.current) {
//       // Reset height to auto to get the correct scrollHeight
//       textareaRef.current.style.height = 'auto';
      
//       // Get the scrollHeight (content height)
//       const scrollHeight = textareaRef.current.scrollHeight;
      
//       // Set height to the maximum of content height or minimum height
//       const newHeight = Math.max(scrollHeight, minHeight);
//       textareaRef.current.style.height = `${newHeight}px`;
//     }
//   };

//   // Adjust height on initial mount and value changes
//   useLayoutEffect(() => {
//     adjustHeight();
//   }, [value]);

//   // Also adjust when the component first renders
//   useEffect(() => {
//     // Small delay to ensure DOM is fully rendered
//     const timer = setTimeout(adjustHeight, 0);
//     return () => clearTimeout(timer);
//   }, []);

//   const handleChangeText = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
//     handleChange(path, event.target.value === '' ? undefined : event.target.value);
//     adjustHeight();
//   };

//   return (
//     <textarea
//       ref={textareaRef}
//       id={`${id}-textarea`}
//       value={value}
//       onChange={handleChangeText}
//       style={{
//         width: '100%',
//         fontSize: '14px',
//         lineHeight: '1.5',
//         padding: '8px',
//         borderRadius: '4px',
//         resize: 'vertical',
//         overflow: 'hidden',
//         whiteSpace: 'pre-wrap',
//         wordWrap: 'break-word',
//         border: '1px solid #d3d3d3',
//         minHeight: `${minHeight}px`,
//         height: 'auto',
//         boxSizing: 'border-box',
//       }}
//       disabled={!enabled || appliedUiSchemaOptions.readOnly}
//     />
//   );
// };

// export const autoResizeTextAreaTester = rankWith(
//   2,
//   or(
//     scopeEndsWith('/properties/particulars'),
//     scopeEndsWith('/properties/guidance'),
//     scopeEndsWith('/properties/response'),
//     scopeEndsWith("/properties/details")
//   )
// );

// export default withJsonFormsControlProps(AutoResizeTextAreaControl);
