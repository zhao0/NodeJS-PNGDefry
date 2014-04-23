CC = gcc
CFLAGS = -g -O2
LDFLAGS = 
LIBS = 
prefix = /Users/al-mutazbellahsalahat/open_source/PNGDefry

.PHONY: all clean

all: pngdefry

pngdefry: pngdefry.o
	$(CC) $(LDFLAGS) -o $@ $^ $(LIBS)

install: pngdefry
	@cp -f pngdefry $(prefix)/bin/pngdefry

clean:
	@rm -f pngdefry *.o
