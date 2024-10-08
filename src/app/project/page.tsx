import PageTitle from '@/components/page-title';
import Projects from '@/components/project/projects';
import { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'Project',
};
const Page = () => {
  return (
    <section>
      <PageTitle
        title={'Show my project'}
        description={'Open source and private contribution projects'}
      />
      <Projects />
    </section>
  );
};

export default Page;
