import { getComponentName } from './utils';

import Paragraph from '~/components/blocks/Paragraph'
import Quote from '~/components/blocks/Quote'
import Form from '~/components/blocks/Form'

const blocks = {
	Paragraph,
	Quote,
	Form
}

export function getBlock(blockName) {
	return blocks[getComponentName(blockName)]
}