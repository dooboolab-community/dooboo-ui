import { addArgTypesEnhancer, addParameters } from "@storybook/react-native";

import { enhanceArgTypes } from "@storybook/docs-tools";
import { extractArgTypes } from "@storybook/react/dist/modern/client/docs/extractArgTypes";

addArgTypesEnhancer(enhanceArgTypes);
addParameters({
  docs: { extractArgTypes },
});
