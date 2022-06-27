import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

const Workspace = (props) => {
  const [workspace, setWorkspace] = useState({
    currentWorkspace: props.workspaces[workspaceId],
  });

  const foo = useSelector((state) => state.entities.workspaces);

  useEffect(() => {
    props.fetchWorkspaces();
    props.fetchWorkspace(props.match.params.workspaceId);
  }, []);

  let { workspaceId } = useParams();

  console.log(foo);

  return (
    <div>
      <h1></h1>
    </div>
  );
};

export default Workspace;
