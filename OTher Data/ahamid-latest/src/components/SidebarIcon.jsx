import React from "react";

const SidebarIcon = (props) => {
  const { cls } = props;
  return (
    <>
      <mat-icon
        _ngcontent-otter-web-c1010524729=""
        role="img"
        svgicon="otter-arrow-up"
        class={`mat-icon notranslate mat-icon-no-color ${cls}`}
        aria-hidden="true"
        data-mat-icon-type="svg"
        data-mat-icon-name="otter-arrow-up"
      >
        <svg
          enableBackground="new 0 0 32 32"
          version="1.1"
          viewBox="0 0 32 32"
          xmlSpace="preserve"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          fit=""
          height="100%"
          width="100%"
          preserveAspectRatio="xMidYMid meet"
          focusable="false"
        >
          <path
            d="M18.221,7.206l9.585,9.585c0.879,0.879,0.879,2.317,0,3.195l-0.8,0.801c-0.877,0.878-2.316,0.878-3.194,0  l-7.315-7.315l-7.315,7.315c-0.878,0.878-2.317,0.878-3.194,0l-0.8-0.801c-0.879-0.878-0.879-2.316,0-3.195l9.587-9.585  c0.471-0.472,1.103-0.682,1.723-0.647C17.115,6.524,17.748,6.734,18.221,7.206z"
            fill="currentColor"
          ></path>
        </svg>
      </mat-icon>
    </>
  );
};

export default SidebarIcon;
