import styled from 'styled-components';
import { useParams, Link } from 'react-router-dom';
import { getProjectData } from 'api';
import { useEffect, useState } from 'react';
import { ProjectDataForm } from 'types';
import { CONTENT } from 'constants/';
import { AddTask } from 'components';
import { TaskCard } from 'components/project';

export default function Project() {
  const [projectData, setProjectData] = useState<ProjectDataForm>();
  const { id: param } = useParams();

  console.log('Project Render!');
  const getData = async () => {
    if (!param) return;

    const { data } = await getProjectData(param);
    console.log(data);
    setProjectData(data);
  };

  useEffect(() => {
    getData();
  }, [param]);

  return (
    <Wrapper>
      <ProjectBoard>
        <TaskCard>
          <AddTask />
        </TaskCard>
        {projectData?.tasks.map((task: any) => {
          const { id, taskTitle } = task;

          return (
            <Link to={`./task/${id}`} key={id}>
              <TaskCard>
                <Title>Title: {taskTitle}</Title>
              </TaskCard>
            </Link>
          );
        })}
      </ProjectBoard>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  height: ${CONTENT.HEIGHT};
  display: flex;
  justify-content: center;
  align-items: center;
  overflow-y: auto;
  overflow-x: hidden;
  padding: 10px;
`;

const ProjectBoard = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 10px;
`;

const Title = styled.div``;
