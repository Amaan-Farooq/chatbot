const textFieldStyles = {
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "#D9D9D9",
    },
    "&:hover fieldset": {
      borderColor: "#69C2D2",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#69C2D2",
    },
  },
  "& .MuiInputLabel-root": {
    color: "#D9D9D9",
  },
  "& .MuiInputLabel-root.Mui-error": {
    color: "#d32f2f",
  },
  "& .MuiInputLabel-outlined.Mui-focused": {
    color: "#69C2D2",
    "& .MuiInputLabel-asterisk": {
      color: "#69C2D2",
    },
  },
  "& .MuiInputLabel-outlined.Mui-focused.Mui-error": {
    color: "#69C2D2",
  },
  "& .MuiInputBase-root": {
    color: "#D9D9D9",
  },
  "& .MuiInputBase-input::placeholder": {
    color: "#D9D9D9",
  },
  "& .MuiInputBase-input": {
    padding: "6px",
  },
  svg: {
    fill: "#D9D9D9",
  },
};

export { textFieldStyles };
