import { register } from '../../rules';

register({
  tech: 'githubactions',
  matchFullPath: true,
  files: /.github\/workflows\/.+\.yml/,
});
