import { getComponentName } from './utils';

import Text from '~/components/fields/Text'
import Textarea from '~/components/fields/Textarea'

const fields = {
	Text,
	Textarea
}

export function getField(blockName) {
	return fields[getComponentName(blockName)]
}