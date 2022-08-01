import React from "react";

export default function Copyright() {
  return (
    <>
      <footer className="bg-light text-center text-lg-start py-5">
        <div
          className="text-center p-3"
          style={{ backgroundColor: `background-color: rgba(0, 0, 0, 0.2)` }}
        >
          Copyright © 2022 All Rights Reserved by{" "}
          <a
            className="text-dark"
            target="_blank"
            href="https://github.com/rendisagala"
          >
            @rendisagala
          </a>
        </div>
      </footer>
    </>
  );
}
