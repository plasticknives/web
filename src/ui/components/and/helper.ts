export default function eq(args) {
  return args.reduce(function(res, arg) {
    return res && arg;
  }, true);
}
