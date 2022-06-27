import React from 'react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

const Workspace = (props) => {
  useEffect(() => {
    props.fetchWorkspaces();
  }, []);

  return (
    <div>
      <h1>does this work</h1>
    </div>
  );
};

export default Workspace;
