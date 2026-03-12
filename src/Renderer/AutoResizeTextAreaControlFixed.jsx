// import React, { useRef, useEffect } from "react";

// const AutoResizeTextAreaControlFixed = ({ data, handleChange, path, enabled }) => {
//   const textareaRef = useRef(null);
//   const value = data || "";

//   const resize = () => {
//     const el = textareaRef.current;
//     if (!el) return;

//     el.style.height = "auto";
//     el.style.height = el.scrollHeight + "px";
//   };

//   useEffect(() => {
//     resize();
//   }, [value]);

//   const onChange = (ev) => {
//     const val = ev.target.value;
//     handleChange(path, val === "" ? undefined : val);
//     resize();
//   };

//   return (
//     <textarea
//       ref={textareaRef}
//       value={value}
//       onChange={onChange}
//       disabled={!enabled}
//       rows={1}
//       style={{
//         width: "100%",
//         resize: "none",
//         overflow: "hidden",
//         padding: "8px",
//         lineHeight: "1.5",
//         border: "1px solid #d3d3d3",
//         borderRadius: "4px",
//         boxSizing: "border-box"
//       }}
//     />
//   );
// };

// export default AutoResizeTextAreaControlFixed;