import {DGE} from './dge'

function parseDeseq2 (content, conditions, deseqResult = new DGE()) {
  content = content.split('\n')
  let header = content[0].split('\t')

  if (header.length !== 7) {
    console.warn('Incorrect header!')
  }

  for (let i = 1, lenLines = content.length; i < lenLines; i++) {
    let line = content[i].split('\t')

    let name = line[0]
    if (name.charAt(0) === '"' && name.charAt(name.length - 1) === '"') {
      name = name.substr(1, name.length - 2)
    }

    deseqResult.addDESeq2Data(name, conditions[0], conditions[1], line[1], line[2], line[3], line[4], line[5], line[6])
  }

  return deseqResult
}

export {parseDeseq2}
