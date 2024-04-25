import { useMemo, useState } from 'react';
import { LuChevronRight, LuChevronLeft } from 'react-icons/lu';
import { ProjectItem } from 'components/ProjectItem/ProjectItem';
import { projects } from 'data/projects';
import {
  FIRST_PAGE,
  LINK_VARIANT,
  PAGINATION_LIMIT,
  PAGINATION_STEP,
  SECOND_PAGE,
} from 'constants/constants';
import {
  List,
  Pagination,
  PaginationButton,
  PageButton,
} from './ProjectList.styled';
import { TransitionLink } from 'components/reusable/TransitionLink';

export const ProjectList = () => {
  const [page, setPage] = useState(FIRST_PAGE);
  const total = projects.length;

  const totalPages = Math.ceil(total / PAGINATION_LIMIT);

  const startIndex = (page - PAGINATION_STEP) * PAGINATION_LIMIT;
  const endIndex = startIndex + PAGINATION_LIMIT;
  const currentProjects = useMemo(
    () => projects.slice(startIndex, endIndex),
    [startIndex, endIndex]
  );

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
        <TransitionLink
          variant={LINK_VARIANT.pagination}
          children={
            <PaginationButton
              type="button"
              onClick={goToPreviousPage}
              disabled={page === FIRST_PAGE}
            >
              <LuChevronLeft />
            </PaginationButton>
          }
        />

        <TransitionLink
          variant={LINK_VARIANT.pagination}
          children={
            <PageButton
              type="button"
              onClick={() => setPage(FIRST_PAGE)}
              disabled={page === FIRST_PAGE}
            >
              {FIRST_PAGE}
            </PageButton>
          }
        />

        <TransitionLink
          variant={LINK_VARIANT.pagination}
          children={
            <PageButton
              type="button"
              onClick={() => setPage(SECOND_PAGE)}
              disabled={page === SECOND_PAGE}
            >
              {SECOND_PAGE}
            </PageButton>
          }
        />

        <TransitionLink
          variant={LINK_VARIANT.pagination}
          children={
            <PaginationButton
              type="button"
              onClick={goToNextPage}
              disabled={page === totalPages}
            >
              <LuChevronRight />
            </PaginationButton>
          }
        />
      </Pagination>
    </>
  );
};
