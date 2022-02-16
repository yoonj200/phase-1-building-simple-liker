const sinon = require( 'sinon' );
const helpers = require( './helpers' );
const chai = require( 'chai' ); // test library
const spies = require( 'chai-spies' );

chai.use( spies );

describe( "main.js", () => {
  it("contains a hidden modal", () => {
    let modal = document.querySelector('.hidden')
    //console.log(modal.classList) -> helps with debugging :)
    expect(modal).not.to.equal(null)
  } )
} )
