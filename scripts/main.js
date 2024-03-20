document.addEventListener('DOMContentLoaded', function() {
  const workspace = Blockly.inject('blocklyDiv', {
    toolbox: `<xml xmlns="https://developers.google.com/blockly/xml"><category name="Logic" colour="210"><block type="controls_if"></block><block type="logic_compare"></block><block type="logic_operation"></block><block type="logic_negate"></block><block type="logic_boolean"></block></category><category name="Text" colour="160"><block type="text"></block><block type="text_join"></block><block type="text_length"></block></category><category name="Math" colour="230"><block type="math_number"></block><block type="math_arithmetic"></block><block type="math_random_int"></block></category></xml>`,
  scrollbars: false
  });

  const runButton = document.getElementById('runButton');
  runButton.addEventListener('click', function () {
    const code = Blockly.JavaScript.workspaceToCode(workspace);
    const outputDiv = document.getElementById('output');
    outputDiv.textContent = eval(code);
  });
});
