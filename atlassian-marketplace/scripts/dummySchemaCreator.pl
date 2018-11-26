#!/usr/bin/perl
use strict;
use warnings;

my $fieldListFileName = shift;

open my $F, "<$fieldListFileName" or die $!;
my @fieldNames =<$F>;
close $F;

for my $fieldName(@fieldNames) {
  chomp ($fieldName);
  printf template(), $fieldName;
}


sub template {
  return << 'END'
{
  name: '%s',
  dataType: 'STRING',
  semantics: {
    conceptType: 'DIMENSION'
  }
},
END
}
