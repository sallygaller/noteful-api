function makeFoldersArray() {
  return [
    {
      id: 1,
      title: "First folder!",
    },
    {
      id: 2,
      title: "Second folder!",
    },
    {
      id: 3,
      title: "Third folder!",
    },
    {
      id: 4,
      title: "Fourth folder!",
    },
  ];
}

function makeMaliciousFolder() {
  const maliciousFolder = {
    id: 911,
    title: 'Sneaky <script>alert("xss");</script>',
  };
  const expectedFolder = {
    ...maliciousFolder,
    title: 'Sneaky &lt;script&gt;alert("xss");&lt;/script&gt;',
  };
  return {
    maliciousFolder,
    expectedFolder,
  };
}

module.exports = {
  makeFoldersArray,
  makeMaliciousFolder,
};
