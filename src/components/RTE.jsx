import React from "react";
import "./style.scss";
import { Editor } from "@tinymce/tinymce-react";
import { Controller } from "react-hook-form";

function RTE({ name, control, defaultValue = "", label }) {
  return (
    <div className="RTE">
      {label && <label className="label">{label}</label>}

      <Controller
        name={name || "content"}
        control={control}
        render={({ field: { onChange } }) => (
          <Editor
            initialValue={defaultValue}
            init={{
              initialValue: defaultValue,
              height: 500,
              menubar: true,
              plugins: [
                "image",
                "advlist",
                "autolink",
                "lists",
                "link",
                "image",
                "charmap",
                "preview",
                "anchor",
                "searchreplace",
                "visualblocks",
                "code",
                "fullscreen",
                "insertdatetime",
                "media",
                "table",
                "code",
                "help",
                "wordcount",
                "anchor",
              ],
              toolbar:
                "undo redo | formatselect | bold italic underline | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | removefont | help",
              content_style:
                "body{font-family:Helvetica,Arial,sans-serif; font-size:14px}",
            }}
            onEditorChange={onChange}
          />
        )}
      />
    </div>
  );
}

export default RTE;
