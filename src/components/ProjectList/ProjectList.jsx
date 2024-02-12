import { LuArrowLeft, LuArrowRight } from 'react-icons/lu';
import { ProjectItem } from 'components/ProjectItem/ProjectItem';
import { List, Pagination, PaginationButton } from './ProjectList.styled';
import { projects } from 'data/projects';
import { useState } from 'react';
import {
  FIRST_PAGE,
  PAGINATION_LIMIT,
  PAGINATION_STEP,
} from 'constants/constants';

export const ProjectList = () => {
  const [page, setPage] = useState(FIRST_PAGE);
  const total = projects.length;

  const totalPages = Math.ceil(total / PAGINATION_LIMIT);

  const startIndex = (page - PAGINATION_STEP) * PAGINATION_LIMIT;
  const endIndex = startIndex + PAGINATION_LIMIT;
  const currentProjects = projects.slice(startIndex, endIndex);

  const goToPreviousPage = () => {
    setPage(prevPage => Math.max(prevPage - PAGINATION_STEP, FIRST_PAGE));
  };

  const goToNextPage = () => {
    setPage(prevPage => Math.min(prevPage + PAGINATION_STEP, totalPages));
  };

  return (
    <>
      <List>
        {currentProjects.map(project => {
          return <ProjectItem key={project.id} project={project} />;
        })}
      </List>
      <Pagination>
        <PaginationButton
          type="button"
          onClick={goToPreviousPage}
          disabled={page === FIRST_PAGE}
        >
          <LuArrowLeft />
        </PaginationButton>

        <PaginationButton type="button" disabled>
          {page}
        </PaginationButton>

        <PaginationButton
          type="button"
          onClick={goToNextPage}
          disabled={page === totalPages}
        >
          <LuArrowRight />
        </PaginationButton>
      </Pagination>
    </>
  );
};
