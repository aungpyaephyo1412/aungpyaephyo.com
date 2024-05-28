import GroupTitle from '@/components/group-title';
import ProjectCard from '@/components/project-card';
import { projects } from '@/db/project';
import groupBy from '@/lib/group-by';
import { cn } from '@/lib/utils';
import { Fragment } from 'react';

const Projects = () => {
  const allProjects = groupBy(projects, (project) => project.year);
  return (
    <div className='pb-5'>
      {Object.entries(allProjects)
        .sort(([yearA], [yearB]) => Number(yearB) - Number(yearA))
        .map(([year, posts]) => (
          <Fragment key={year}>
            <GroupTitle name={year} />
            <ul className={cn('group/projects space-y-5 mb-5 ')}>
              {posts
                .sort((a, b) => a.title.localeCompare(b.title))
                .map((project) => (
                  <ProjectCard key={project.id} project={project} />
                ))}
            </ul>
          </Fragment>
        ))}
    </div>
  );
};

export default Projects;
