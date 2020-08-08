module.exports = {
  show: jest.fn().mockImplementation(() => { console.log('show splash screen'); }),
  hide: jest.fn().mockImplementation(() => { console.log('hide splash screen'); }),
  getCurrentPosition: jest.fn().mockImplementation(() => console.log('location test'))
} 