import Experience, { JOBS } from '../Experience';
import React from 'react';
import { shallow } from 'enzyme';

it('renders without crashing', () => {
  shallow(
    <Experience />,
  );
});

it('renders selected job', () => {
  const testJob = JOBS[0];
  const component = shallow(<Experience selectedJob={testJob} />);
  expect(component.find(`.experience-job-company-container.experience-job-${testJob.id}.selected`)).toHaveLength(1);
});