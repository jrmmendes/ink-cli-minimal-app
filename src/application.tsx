import { exit } from 'process';
import { Box, render, Text } from 'ink';
import pkg from '../package.json';

type ApplicationProps = {
  name: string;
  version: string;
}

export const Application = ({ name, version }: ApplicationProps) => {
  const ORANGE_COLOR = "#FE9900";

  return (
    <Box width={80} paddingX={1} flexDirection="column">
      <Box 
        borderStyle="round" 
        paddingX={1} 
        borderColor={ORANGE_COLOR}  
        flexDirection="column"
      >
        <Box paddingBottom={1}>
          <Text bold color={ORANGE_COLOR}>React + Ink Example Application</Text>
        </Box>
        <Text>{name}</Text>
        <Text>version: {version}</Text>
      </Box>
    </Box>
  )
}

try {
  const { waitUntilExit } = render(
    <Application 
      name={pkg.name}
      version={pkg.version}
    />
  )
  await waitUntilExit();
} catch(error) {
  console.error({ status: 'app exited with error', error });
  exit(1);
}
