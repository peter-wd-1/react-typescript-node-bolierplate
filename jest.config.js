module.exports = {
  coveragereporters: ["json", "json-summary", "text", "lcov", "clover"],
  moduledirectories: ["node_modules", "src"],
  modulefileextensions: ["js", "jsx", "ts", "tsx"],
  preset: "ts-jest",
  roots: ["<rootDir>/__test__"],
  testenvironment: "node",
  transform: {
    "^.+\\.(ts|tsx)?$": "ts-jest",
  },
};
