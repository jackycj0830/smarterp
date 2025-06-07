import DashboardClientContent from './DashboardClientContent';
import { getFileContent, README_PATH, SPEC_PATH, TODOLIST_PATH } from './file-utils';
import { README_FILENAME, SPEC_FILENAME, TODOLIST_FILENAME } from './file-constants';

export const dynamic = 'force-dynamic'; // Ensure fresh data on each request

const DEFAULT_README_CONTENT = `# ${README_FILENAME}\n\nWelcome to your project! This is the main document where you can describe your project, how to set it up, and how to use it. \n\nUse RefactorFlow to keep this, your specifications, and your TODO list synchronized.`;
const DEFAULT_SPEC_CONTENT = `# ${SPEC_FILENAME}\n\n## Feature A\n- Requirement 1\n- Requirement 2\n\n## Feature B\n- Requirement 1\n- Requirement 2`;
const DEFAULT_TODOLIST_CONTENT = `# ${TODOLIST_FILENAME}\n\n- [ ] Setup project repository\n- [ ] Define core features in ${SPEC_FILENAME}\n- [ ] Write initial ${README_FILENAME}\n- [ ] Implement AI suggestion feature`;


export default async function DashboardPage() {
  // Ensure files are created with default content if they don't exist
  const initialReadme = await getFileContent(README_PATH, DEFAULT_README_CONTENT);
  const initialSpec = await getFileContent(SPEC_PATH, DEFAULT_SPEC_CONTENT);
  const initialTodolist = await getFileContent(TODOLIST_PATH, DEFAULT_TODOLIST_CONTENT);

  return (
    <DashboardClientContent
      initialReadme={initialReadme}
      initialSpec={initialSpec}
      initialTodolist={initialTodolist}
    />
  );
}
