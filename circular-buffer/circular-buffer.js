 function CircularBuffer(size){
   this.array = new Array(size);
   this.write_pointer = 0;
   this.read_pointer = 0;
   this.full = false;
   this.empty = true;
   this.read = function(){
     if (this.empty) {
       throw bufferEmptyException;
     }
     value = this.array[this.read_pointer];
     this.read_pointer = (this.read_pointer + 1) % size;
     this.empty = (this.read_pointer === this.write_pointer);
     this.full = false;
     return value;
   }
   this.write = function(value){
     if (this.full) {
       throw bufferFullException;
     }
     this.forceWrite(value);
   }
   this.forceWrite = function(value){
     if ((value != null) && (value != undefined)) {
       this.array[this.write_pointer] = value;
       this.write_pointer = (this.write_pointer + 1) % size;
       if (this.full) {
         this.read_pointer = this.write_pointer;
       }
       this.full = (this.read_pointer === this.write_pointer);
       this.empty = false;
     }
   }
   this.clear = function(){
    this.empty = true;
    this.full = false;
    this.write_pointer = this.read_pointer = 0;
   }
 }
function bufferEmptyException(message) {};
function bufferFullException(message) {};

function circularBuffer(size) {
  return new CircularBuffer(size);
}

module.exports =  {circularBuffer, bufferEmptyException, bufferFullException};
