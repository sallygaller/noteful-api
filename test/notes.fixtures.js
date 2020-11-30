function makeNotesArray() {
  return [
    {
      id: 1,
      title: "First Note!",
      content: "This is my first test note!",
      folder_id: 2,
      modified: "2029-01-22T16:28:32.615Z",
    },
    {
      id: 2,
      title: "Second Note!",
      content: "This is my second test note!",
      folder_id: 1,
      modified: "2100-05-22T16:28:32.615Z",
    },
    {
      id: 3,
      title: "Third Note!",
      content: "This is my third test note!",
      folder_id: 1,
      modified: "1919-12-22T16:28:32.615Z",
    },
    {
      id: 4,
      title: "Fourth Note!",
      content: "This is my fourth test note!",
      folder_id: 3,
      modified: "1919-12-22T16:28:32.615Z",
    },
  ];
}

function makeMaliciousNote() {
  const maliciousNote = {
    id: 911,
    title: 'Sneaky <script>alert("xss");</script>',
    folder_id: 1,
    content: `Bad image <img src="https://url.to.file.which/does-not.exist" onerror="alert(document.cookie);">. But not <strong>all</strong> bad.`,
    modified: new Date().toISOString(),
  };
  const expectedNote = {
    ...maliciousNote,
    title: 'Sneaky &lt;script&gt;alert("xss");&lt;/script&gt;',
    content: `Bad image <img src="https://url.to.file.which/does-not.exist">. But not <strong>all</strong> bad.`,
  };
  return {
    maliciousNote,
    expectedNote,
  };
}

module.exports = {
  makeNotesArray,
  makeMaliciousNote,
};
